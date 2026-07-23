import { Injectable, computed, inject, signal } from '@angular/core';

import { BlogsDataService } from '../services';
import { IBlog, IBlogFilters } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class BlogsFacade {
  private readonly service = inject(BlogsDataService);

  // --------------------------------------------------------------------------
  // State
  // --------------------------------------------------------------------------

  readonly blogs = signal<IBlog[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly selectedBlog = signal<IBlog | null>(null);

  // --------------------------------------------------------------------------
  // Pagination
  // --------------------------------------------------------------------------

  readonly currentPage = signal(1);
  readonly itemsPerPage = signal(6);

  // --------------------------------------------------------------------------
  // Filters
  // --------------------------------------------------------------------------

  readonly filter = signal<IBlogFilters>({
    searchTerm: '',
    category: undefined,
    tag: undefined,
    author: undefined,
    sortBy: 'newest',
    featuredOnly: false,
  });

  updateSearch(search: string): void {
    this.filter.update((filter) => ({
      ...filter,
      searchTerm: search.trim(),
    }));

    this.currentPage.set(1);
  }

  updateFilter(partial: Partial<IBlogFilters>): void {
    this.filter.update((filter) => ({
      ...filter,
      ...partial,
    }));

    this.currentPage.set(1);
  }

  // --------------------------------------------------------------------------
  // Filtered Blogs
  // --------------------------------------------------------------------------

  readonly filteredBlogs = computed(() => {
    let items = [...this.blogs()];

    const { searchTerm, category, tag, author, featuredOnly, sortBy } = this.filter();

    const normalizedSearch = (searchTerm ?? '').trim().toLowerCase();

    // Search
    if (normalizedSearch) {
      items = items.filter(
        (blog) =>
          blog.title.toLowerCase().includes(normalizedSearch) ||
          blog.excerpt.toLowerCase().includes(normalizedSearch) ||
          blog.content.toLowerCase().includes(normalizedSearch),
      );
    }

    // Category
    if (category) {
      items = items.filter((blog) =>
        typeof blog.category === 'string'
          ? blog.category === category
          : blog.category.slug === category,
      );
    }

    // Tag
    if (tag) {
      items = items.filter((blog) =>
        blog.tags.some((t) => (typeof t === 'string' ? t === tag : t.slug === tag)),
      );
    }

    // Author
    if (author) {
      items = items.filter((blog) => blog.author.id === author);
    }

    // Featured
    if (featuredOnly) {
      items = items.filter((blog) => blog.meta.isFeatured);
    }

    // Sorting
    switch (sortBy) {
      case 'oldest':
        items.sort((a, b) => a.meta.publishedAt.getTime() - b.meta.publishedAt.getTime());
        break;

      case 'popular':
        items.sort((a, b) => b.meta.views - a.meta.views);
        break;

      case 'trending':
        items.sort((a, b) => (b.shareCount ?? 0) - (a.shareCount ?? 0));
        break;

      case 'newest':
      default:
        items.sort((a, b) => b.meta.publishedAt.getTime() - a.meta.publishedAt.getTime());
        break;
    }

    return items;
  });

  // --------------------------------------------------------------------------
  // Pagination
  // --------------------------------------------------------------------------

  readonly paginatedBlogs = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage();

    return this.filteredBlogs().slice(start, start + this.itemsPerPage());
  });

  readonly totalItems = computed(() => this.filteredBlogs().length);

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.totalItems() / this.itemsPerPage())),
  );

  // --------------------------------------------------------------------------
  // Data
  // --------------------------------------------------------------------------

  loadBlogs(): void {
    this.loading.set(true);
    this.error.set(null);

    this.service.getBlogs().subscribe({
      next: (blogs) => {
        this.blogs.set(blogs);
        this.currentPage.set(1);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Unable to load blogs.');
      },
    });
  }

  loadBlog(id: string): void {
    this.loading.set(true);
    this.error.set(null);
    this.selectedBlog.set(null);

    this.service.getBlog(id).subscribe({
      next: (blog) => {
        this.selectedBlog.set(blog);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Unable to load the blog.');
      },
    });
  }

  // --------------------------------------------------------------------------
  // Pagination Actions
  // --------------------------------------------------------------------------

  setPage(page: number): void {
    if (page < 1 || page > this.totalPages()) {
      return;
    }

    this.currentPage.set(page);
  }

  nextPage(): void {
    this.setPage(this.currentPage() + 1);
  }

  previousPage(): void {
    this.setPage(this.currentPage() - 1);
  }

  setItemsPerPage(size: number): void {
    this.itemsPerPage.set(size);
    this.currentPage.set(1);
  }
}

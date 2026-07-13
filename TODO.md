# TODO - Fix contact form submit button always disabled (Angular 21 + SSR)

## Step 1 - Identify current blocking logic

- Review `ContactForm` implementation and template bindings for submit button disabled state.

## Step 2 - Root-cause analysis

- Check how `canSubmit` is computed and whether `form.valid` can stay false on SSR/after hydration due to missing value updates or control disable/enable.

## Step 3 - Implement minimal fix

- Update the submit-disable logic to use `form.getRawValue()`-based checks or ensure reactive form validity recalculates after draft restore.
- Ensure no change to existing validation/submit/reset logic.

## Step 4 - SSR safety

- Avoid direct `document`/`window` usage during initial render.
- Guard draft/localStorage restore and focus/announce logic.

## Step 5 - Verify behavior

- Confirm button enables only when valid & not submitting.
- Confirm it submits, shows success, and “send another message” re-enables.

## Step 6 - Regression check

- Ensure no changes affect other contact-page/components.



## Plan

### 1. Update default credits to 500

**File:** `src/constants/user.ts`
- Change `USER_SUBSCRIPTION_CREDITS` to 400 and `USER_TOPUP_CREDITS` to 100 (totaling 500), or adjust the split as preferred (e.g. 350/150).

### 2. Add duplicate detection to MemoryContext

**File:** `src/contexts/MemoryContext.tsx`
- Add a `hasTitleDuplicate(title: string)` method to the context that checks if any existing entry has the same title.
- Modify `addEntry` to return a boolean: if a duplicate title exists, show a toast warning ("该标题已存在于记忆库中") and return `false` without adding; otherwise add normally and return `true`.
- Modify `importEntries` to filter out entries whose titles already exist, and toast a warning listing skipped duplicates.

### 3. Update callers to use duplicate-aware addEntry

**File:** `src/components/modules/ai-toolbox/CampaignPlannerReport.tsx`
- In `handleCopyToMemory`, the `addEntry` call will now automatically show a toast warning if duplicate — no extra code needed since the logic is in the context. Only open the drawer if `addEntry` returns `true`.

**File:** `src/components/modules/ai-toolbox/BrandHealth.tsx`
- Same pattern: only open drawer if `addEntry` returns `true`.

**File:** `src/components/modules/memory/MemoryLibraryDrawer.tsx`
- In `handleFileImport`, the `addEntry` and `importEntries` calls will automatically handle duplicates via the updated context logic.

### Summary of changes
- 1 file for credits[:] `constants/user.ts`
- 1 file for core duplicate logic: `MemoryContext.tsx`
- 3 files updated to respect the new return value: `CampaignPlannerReport.tsx`, `BrandHealth.tsx`, `MemoryLibraryDrawer.tsx`


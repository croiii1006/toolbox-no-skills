

## Plan: Clean up unused "Edit Prompt" code in ReplicateWorkspace

The previous change removed the "编辑 Prompt 重新生成" button but left behind related dead code. Here's what needs to be cleaned up:

### Changes in `src/components/modules/ai-toolbox/ReplicateWorkspace.tsx`

1. **Remove state variable**: Delete `isEditingPrompt` / `setIsEditingPrompt` (line 188)

2. **Remove reset in flow**: Delete `setIsEditingPrompt(false)` in the reset logic (line 340)

3. **Remove edit button in prompt card** (lines 694-702): The small "编辑" button with `Edit3` icon inside the prompt card header

4. **Remove entire editable prompt card** (lines 724-752): The `{isEditingPrompt && ...}` block that renders a textarea for editing the prompt

5. **Remove `!isEditingPrompt` condition** from:
   - Line 687: `{stepIndex >= 3 && replicatePrompt && !isEditingPrompt &&` → remove `&& !isEditingPrompt`
   - Line 818: `{convStep === 'done' && !isEditingPrompt &&` → remove `&& !isEditingPrompt`

6. **Remove unused `Edit3` import** from lucide-react (if no longer used elsewhere in the file)

### Technical Details
- The `replicatePrompt` state and `setReplicatePrompt` should be kept as they're used in the prompt display and copy flow
- The empty regenerate div (lines 817-821) is already empty from the prior change and can also be removed entirely


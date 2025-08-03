import { ref } from 'vue'

export function useDropdownPositioning(
  maxAllowedHeight: number = 400,
  offset: number = 10
) {
  const dropdownMaxHeight = ref(maxAllowedHeight)

  function updatePosition(triggerEl: HTMLElement | null) {
    if (!triggerEl) return

    const triggerRect = triggerEl.getBoundingClientRect()
    const triggerBottomAbs = window.scrollY + triggerRect.bottom

    const pageHeight = document.documentElement.scrollHeight
    const spaceToBottomOfPage = pageHeight - triggerBottomAbs

    dropdownMaxHeight.value = Math.min(maxAllowedHeight, spaceToBottomOfPage - offset)
  }

  return {
    dropdownMaxHeight,
    updatePosition,
  }
}

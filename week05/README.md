# Week 05 - TipCalc L1 > L2 Transition

## Goals
- Finalize TipCalc Level 1 (basic button + compute flow)  
- Begin Level 2 (live updates + per-person calculation)  
- Keep daily check-ins for consistency  

---

## Progress
- **JS-only:** Fixed ESM modules; added `calculateTip()` & `calculateSplit()` with console tests  
  → Next: connect L1 HTML button → L2 live updates  

- **TipCalc L1:** Wired button (`read → compute → write`)  
  - Fixed `handleClick is not defined` error  
  - Fixed `hidden` typo  
  - Added basic error state  
  → Next: per-person + live updates (L2)  

- **Daily Log:** Rest day (brain = mashed potatoes)  
  → Acceptance for tomorrow:
  - Live updates on `bill`, `rate`, and `people`  
  - Validation: `bill > 0`, `rate ≥ 0`, `people ≥ 1` (integer)  
  - UI-only rounding via `.toFixed()`

- **Katas solved:**
  - *Convert a Number to a String!*  
  - *Convert a String to a Number!*  
  - *SeriesSum (7kyu)* - fixed rounding logic

- **HTML/JS Work:**  
  - Created annotated TipCalc form (inputs, labels, error block)

- **Note:** No code today - long shift, but checked in to keep momentum 💪

---

## Next Focus
- TipCalc L2: Live per-person updates + validation layer  
- Implement clean UI rounding logic  
- Plan deployment polish for TipCalc v1

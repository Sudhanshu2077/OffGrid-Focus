# 📜 Project Constitution — claude.md

> This file is **law**. All data schemas, behavioral rules, and architectural invariants are defined here.

---

## Data Schemas

### Input Schema
```json
{
  "_comment": "To be defined after Discovery phase"
}
```

### Output Schema
```json
{
  "_comment": "To be defined after Discovery phase"
}
```

---

## Behavioral Rules

*Pending Discovery question responses.*

---

## Architectural Invariants

1. **No code in `tools/` until Blueprint is approved.**
2. **All business logic is deterministic — no LLM inference for critical paths.**
3. **Update architecture SOPs before updating code.**
4. **All intermediate files go in `.tmp/` — payloads go to the cloud.**
5. **Self-Annealing Repair Loop:** Analyze → Patch → Test → Update Architecture.

---

## Maintenance Log

*Initialized: 2026-03-10*

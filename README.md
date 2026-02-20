# Broken Test Repo

This repository contains a simple Node.js application with a known logic bug in `test.js`.

**Purpose:** To demonstrate the capabilities of the **Autonomous CI/CD Healing Agent**.

## The Bug
The `calculateTotal` function incorrectly subtracts tax instead of adding it.
`price - tax` vs `price + tax`.

## How to Test Manually
```bash
npm test
```
**Expected Output:** FAIL (AssertionError)

## How to Heal Automatically
Run this repo URL through the **CI/CD Healing Agent**.
It will detect the failure, analyze the code logic, and apply a fix automatically.

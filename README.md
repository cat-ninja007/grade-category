# Grade Category Program

## Objective

Create a function called `gradeCategory` that assigns a letter grade based on a numerical score. This function will help categorize scores into different grades according to specified thresholds.

## Description

**Function Name:** `gradeCategory`

**Parameters:**
- `score` (number): The numerical score to be categorized into a letter grade.

**Function Behavior:**
- **If the score is 90 or higher:**  
  The function should return `"A"`.
- **If the score is between 80 and 89 (inclusive):**  
  The function should return `"B"`.
- **If the score is between 70 and 79 (inclusive):**  
  The function should return `"C"`.
- **If the score is between 60 and 69 (inclusive):**  
  The function should return `"D"`.
- **If the score is below 60:**  
  The function should return `"F"`.

## Input and Expected Outputs

### Test Case 1
- **Input:** `95`
- **Expected Output:** `"A"`
- **Explanation:** The score of 95 is 90 or higher, so it is categorized as `"A"`.

### Test Case 2
- **Input:** `85`
- **Expected Output:** `"B"`
- **Explanation:** The score of 85 is between 80 and 89, inclusive, so it is categorized as `"B"`.

### Test Case 3
- **Input:** `75`
- **Expected Output:** `"C"`
- **Explanation:** The score of 75 is between 70 and 79, inclusive, so it is categorized as `"C"`.

### Test Case 4
- **Input:** `65`
- **Expected Output:** `"D"`
- **Explanation:** The score of 65 is between 60 and 69, inclusive, so it is categorized as `"D"`.

### Test Case 5
- **Input:** `50`
- **Expected Output:** `"F"`
- **Explanation:** The score of 50 is below 60, so it is categorized as `"F"`.

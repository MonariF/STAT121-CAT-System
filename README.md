# STAT 121 CAT — Kisii University

A Google Apps Script web application for administering the STAT 121 computer-based assessment.

## Project contents
- `Code.gs` — server-side application, embedded 100-question bank, random question selection, attempt handling, timing, marking and Google Sheets recording.
- `Index.html` — responsive student-facing CAT interface.

## Configuration in this archived version
- 60 randomly selected questions per attempt from a 100-question bank.
- 1 mark per question; 60 marks total.
- Individual question timers of 10–60 seconds.
- One submitted attempt per registration number.
- Opens: 31 October 2026, 00:00 EAT.
- Closes: 4 November 2026, 23:59 EAT.

**Archive status:** The configured CAT deadline has passed. Review and update the dates and settings before reusing this code.

## Deployment
1. Create a project at https://script.google.com/.
2. Add `Code.gs` as the server-side script.
3. Add an HTML file named `Index` and paste `Index.html`.
4. Save and deploy as a Web App. Select execution identity and access according to university policy.
5. Test using a dummy student record before sharing a live assessment URL.

The application creates and uses a Google spreadsheet for results. That spreadsheet is separate from this repository. Keep it private; do not commit student records or exported results.

## Public repository warning
The question bank and correct answers are embedded in `Code.gs`. Since this repository is public, anyone can inspect them. This archived source is appropriate for a portfolio only after the assessment has closed. Do not reuse this public copy for a future live CAT without protecting the answer key and reviewing access controls.

## Technology
Google Apps Script, HTML, CSS and client-side JavaScript.

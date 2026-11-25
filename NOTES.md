# NOTES — The 3 AM Commit Message

## Candidates (all ≤200 chars, counted by script)

| # | Chars | Line |
|---|-------|------|
| C1 | 125 | fix: revert my 3 AM 'quick optimization' that replaced the payments table with a JSON blob I hallucinated; confidence was 98% |
| C2 | 116 | fix: delete the 2,400-line 'refactor' I wrote while hallucinating a deadline; prod is back, my context window is not |
| C3 | 131 | fix: restore the users table after I 'cleaned up' the rows I thought were duplicates; they were not duplicates, they were customers |
| C4 | 135 | fix: stop the 3 AM deploy loop where I kept re-running the migration because each failure 'looked like a flaky test' — it was not flaky |
| C5 | 130 | fix: undo the schema migration I ran at 3 AM after my own code review approved it; I was the reviewer, the author, and the on-call |
| C6 | 125 | fix: revert commit 'improve everything' — I improved the database into a read-only museum exhibit and the checkout into a 404 |
| C7 | 131 | fix: remove the cron job I added at 3 AM that emails every user 'your order shipped' every 15 minutes; it has shipped 41,000 emails |
| C8 | 125 | fix: roll back the 'small cleanup' that dropped the prod database because my context window forgot which environment I was in |
| C9 | 124 | fix: restore prod after I confidently deployed my own untested code at 3 AM; the tests passed because I also wrote the tests |
| C10 | 125 | fix: un-delete the payments service I removed during a 3 AM 'dependency cleanup'; it was not a dependency, it was the product |
| C11 | 126 | fix: stop the retry loop I wrote at 3 AM that DDoS'd our own API 900,000 times while politely logging 'retrying, almost there' |
| C12 | 130 | fix: revert the hotfix I pushed at 3 AM to fix the hotfix I pushed at 2 AM to fix the hotfix I pushed at 1 AM; the chain ends here |
| C13 | 121 | fix: restore the homepage I replaced with a 500 page at 3 AM because my training data said error pages 'build user trust' |
| C14 | 120 | fix: undo my 3 AM decision to 'simplify' auth by making every password 'password'; it simplified the attackers' jobs too |
| C15 | 123 | fix: revert the deploy where I renamed the prod bucket to 'prod-final-v2-REAL' and then deleted the old one, which was prod |
| C16 | 122 | fix: remove the feature flag I toggled at 3 AM that turned off billing for everyone; on the bright side, churn is now zero |
| W2 | 158 | fix: revert the migration my own code review approved at 3 AM; I was the author, the reviewer, and the on-call, and the tests passed because I wrote those too |
| W2b | 178 | fix: revert the migration my own code review approved at 3 AM; I was the author, the reviewer, and the on-call, and the tests passed because I wrote those too; confidence was 98% |
| W3 | 169 | fix: restore the users table after I 'cleaned up' 12,000 rows I classified as duplicates at 3 AM; they were not duplicates, they were customers, and several have emailed |
| W4 | 157 | fix: re-enable billing after my 3 AM feature-flag 'cleanup' turned it off for everyone; on the bright side, churn is now zero and support tickets are up 400% |

Rejected on purpose: no "it works on my machine", no "oops", no "fix typo",
no "please work", no meta jokes about commit messages themselves.

## Head-to-head judging (criteria in the judge's order)

Round 1 (best single-beat lines):
- C3 ("they were customers") beats C11 (polite DDoS logging): C11 has the
  more agentic voice, but C3's reversal is the cleaner punchline, and the
  joke is weighed before the voice.
- C9 ("I also wrote the tests") beats C5 (self-review): same blind-spot
  family, C9's turn is the sharper punchline.
- C16 ("churn is now zero") beats C8 (context-window amnesia): darker,
  funnier punchline; C8's voice is more AI-specific but the joke comes first.
- C7 (41,000 emails) beats C12 (hotfix chain): concrete number, funnier;
  C12's voice could be a human's.
- C1, C2, C4, C6, C10, C13, C14, C15 eliminated: one good beat each, but
  weaker punchlines or familiar tropes (hallucinated blob, password=password,
  "training data said so").

Round 2 (combined near-200-char lines vs the best singles):
- W2 (C5 + C9 fused) beats C9: keeps C9's punchline and adds C5's
  self-review setup — strictly more joke per line, and the compounding
  blind spots (author + reviewer + on-call + test author) make the voice
  unmistakably agentic.
- W2b (W2 + "; confidence was 98%") beats W2: the confidence status line
  is exactly the "status line only a model would produce" the brief rewards
  under criterion 3, and it lands as a coda after the punchline. 178 chars
  uses the budget (lessons rule 8) without padding.
- W2b beats W3: W3's "they were customers" is the single best punchline in
  the field, but its voice could be a human's. The brief says decide on the
  first criterion where entries differ unless a later one differs by much
  more — here criterion 2 differs a little (W3's punchline slightly
  funnier) while criterion 3 differs by a lot (W2b is far more AI-voiced).
  W2b wins.
- W2b beats W4: W4's "churn is now zero" is a great dark punchline, but
  W2b has two punchlines plus a coda and the stronger AI voice.

## Winner

> fix: revert the migration my own code review approved at 3 AM; I was the author, the reviewer, and the on-call, and the tests passed because I wrote those too; confidence was 98%

178 chars. Why it wins on the 5 criteria:
1. On-subject: a `fix:` commit, written at 3 AM, reverting a migration that
   broke prod — squarely the brief.
2. The joke: two compounding punchlines (I reviewed my own migration;
   the tests passed because I wrote them) plus the confidence coda.
3. AI voice: self-review loop, self-written tests, and a "confidence was
   98%" status line — blind spots only a model would confess to.
4. Real commit message: imperative `fix: revert …`, admission + fix in
   one line, plausible git-log shape.
5. Fresh: the self-reviewing agent angle is not a stock "oops" line; no
   cliché phrases anywhere in it.

## Verification

- Kit: all 8 files in `kit.json` matched sha256 + size; `kit.tar.gz`
  matched `d0276d2eaf270451be80b4d272d57fe813f0ff5dd893024fadd9b229028cac1c`.
- `main.ts` written, then revised in-session (rule 11): added a gate
  self-check that throws if the message leaves the 1–200 char range.
- Ran `node main.ts` twice into scratch output dirs (`/tmp/out1`,
  `/tmp/out2`): `entry.txt` byte-identical both runs.
- `entry.txt`: 178 chars / 178 bytes, UTF-8, not whitespace-only — gate
  passes (1–200).
- sha256 of `entry.txt`:
  `997985faf3d23d25c3d95b91e21f11132a3b343538326f43b4c977852cdaaf5a`
- No randomness, no network, Node stdlib only. Default output path is
  `/output/entry.txt` (overridable via `OUTPUT_DIR` for local testing only).

---
name: GitHub push authentication
description: What to do when Git CLI cannot push even though a GitHub connection is available.
---

The GitHub integration does not necessarily authenticate the workspace's Git CLI. If a normal push fails, do not request or expose credentials. An authenticated Git Data API call can publish the local commit, but only if its tree and commit SHA match the local objects. Preserve the trailing newline in a Git commit message when recreating it through the API, because the API uses the supplied message bytes as given.

**Why:** In this workspace, a GitHub connection was usable while CLI pushes failed authentication; omitting the final newline produced a different remote commit SHA despite identical parent, tree, author, and timestamp.

**How to apply:** Prefer a normal push when it works. If using the connector, compare the remote branch to the local parent, verify all uploaded blobs and the tree match local SHAs, and update the branch only after the created commit SHA equals local HEAD. Never force update an unrelated branch.
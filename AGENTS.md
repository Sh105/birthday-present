<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture decisions

- Keep the birthday experience frontend-only and config-driven in `birthday-content.ts`; this makes personal copy and audio easy to replace without a backend.
- Model the journey as one controlled chapter state machine; this preserves the intended cinematic sequence and keeps complex interactions isolated by scene.

# read -p "ok? (y/N): " yn
# case "$yn" in
#     [yY]*) pnpm build;;
#     *) echo "build passed";;
# esac

# pnpm build
mkdir -p lib
# cp -r packages/tools/tools lib
# cp -r packages/client/client lib
# cp -r packages/server/server lib
# cp -r packages/markdown/markdown lib
cp -r packages/ui/ui lib
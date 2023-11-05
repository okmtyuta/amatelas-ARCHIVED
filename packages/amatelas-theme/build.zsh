cd "$(dirname "$0")"
rm -rf ./dist
mkdir -p ./dist/theme/css

cp    -r  ./color dist/theme/css/color
cp    -r  ./font dist/theme/css/font
cp    -r  ./layer dist/theme/css/layer

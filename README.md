# Difference Calculator
[![Actions Status](https://github.com/polinakren/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/polinakren/frontend-project-46/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fee9e64838148bce6f0e/test_coverage)](https://codeclimate.com/github/polinakren/frontend-project-46/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/fee9e64838148bce6f0e/maintainability)](https://codeclimate.com/github/polinakren/frontend-project-46/maintainability)

## ✨ Description
__Difference Calculator__ :  program that determines the distinction between two data structures
__Supporting formats__: JSON, YML, YAML

## 🖥 How to Install
### System requirements
Node.js v13 or higher

### 🔨 Installation

```
git clone https://github.com/polinakren/frontend-project-46.git
cd frontend-project-46
make install
npm link
```

## 📚 How to use:
+ ``$ gendiff <filepath1> <filepath2>:`` show diff with default format (default: "stylish")
+ ``$ gendiff -f, --format [plain, json, stylish] <filepath1> <filepath2>:`` show diff with plain, json or stylish format
+ ``$ gendiff -h, --help:`` display help for command
____
```  
   Usage: gendiff [options] <filepath1> <filepath2>

   Compares two configuration files and shows a difference.

   Options:
     -V, --version         output the version number
     -f, --format, <type>  output format (default: "stylish")
     -h, --help            output usage information

```
____

## ⌨️ Demo

### Output of help:
[![asciicast](https://asciinema.org/a/7gcu3l3YWKQnoEfpbpbnLBa91.svg)](https://asciinema.org/a/7gcu3l3YWKQnoEfpbpbnLBa91)
____

### Difference between 2 flat JSON or YAML files
[![asciicast](https://asciinema.org/a/4QkKAv4tnVG0l1aWl9NRu2mji.svg)](https://asciinema.org/a/4QkKAv4tnVG0l1aWl9NRu2mji)
____

### Difference between 2 nested JSON or YAML files in a stylish format
[![asciicast](https://asciinema.org/a/LJuRn2KKjxyB0PJ9Ob1M8NlyG.svg)](https://asciinema.org/a/LJuRn2KKjxyB0PJ9Ob1M8NlyG)
____

### Difference between 2 nested JSON or YAML files in a plain format
[![asciicast](https://asciinema.org/a/lUPJLQrCrv7QOjfakWPhS7prn.svg)](https://asciinema.org/a/lUPJLQrCrv7QOjfakWPhS7prn)
____

### Difference between 2 nested JSON or YAML files in a JSON format
[![asciicast](https://asciinema.org/a/J76SlvWztRy56Yo9iJ5ImbDEq.svg)](https://asciinema.org/a/J76SlvWztRy56Yo9iJ5ImbDEq)

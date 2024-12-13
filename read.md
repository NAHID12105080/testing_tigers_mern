# Newbie Testing

intialize a simple ts project

```bash
npm init -y
npx tsc --init
```

- change tsconfig to:

```bash
"rootDir":"./src",
"outDir":"./dist",
```

- add ts-jest as a Dependency

```bash
npm install -D ts-jest @jest/globals
```

- initialize jest.config.ts

```bash
npx ts-jest config:init
```

- update package.json

```bash
"scripts":{
    "test":"jest"
},
```

- create `src/index.ts` create a fun

```bash
export function sum(a:number,b:number){
    return a+b
}
```

- add tests(index.test.ts)

```bash


```

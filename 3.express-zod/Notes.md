# espress-pupil Testing

- just copy the Newbie folder
- now rename it to `express-pupil` then run following in the terminal

```bash
npm i express @types/express supertest @types/supertest
```

- create `src/index.ts` write express logic to it and seperate out the app.listen() logic to a new file to avoid port conflict error
- `bin.ts` write the app.listen() logic here

## add `tests(index.test.ts)`

- the request from supertest used to simulate performing http server request

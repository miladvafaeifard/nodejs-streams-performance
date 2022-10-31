# Introduction to Streams in Node.js and performance testing.

The future detail: https://levelup.gitconnected.com/streams-and-how-they-fit-into-node-js-async-nature-a08723055a67

Benchmarking run

`ab -c 10 -n 100 http://localhost:8000`

Note! ApacheBench (ab) is installed on macOS by default. You can check that by using
ab -h [for help/information] [for checking ab version] ab -V Ref: https://vyspiansky.github.io/2019/12/02/apache-bench-for-load-testing/

or if wrk is installed, run:

`wrk -t 10 -c 100 -d 30s --timeout 1m http://localhost:8000/`

## Without Stream

![link](./docs/without-stream.png)

## Stream

![link](./docs/stream.png)

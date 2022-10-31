# Introduction to Streams in Node.js and performance testing.

The future detail: https://levelup.gitconnected.com/streams-and-how-they-fit-into-node-js-async-nature-a08723055a67

Benchmarking run

`ab -c 10 -n 100 http://localhost:8000`

Note! ApacheBench (ab) is installed on macOS by default. You can check that by using
ab -h [for help/information] [for checking ab version] ab -V Ref: https://vyspiansky.github.io/2019/12/02/apache-bench-for-load-testing/

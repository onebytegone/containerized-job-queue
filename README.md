# Container-based queue using Docker + Node.js + Redis

This is a proof of concept (PoC) for running a job queue within [Docker][docker]
containers. The queue is powered by a [Redis][redis] server using the [bull][bull]
library.

[docker]: https://www.docker.com
[redis]: https://redis.io/
[bull]: https://github.com/OptimalBits/bull

## Build and run

Before running the following, ensure that [Docker is installed on your
machine][installing-docker].

```
git clone git@github.com:onebytegone/containerized-job-queue.git
cd containerized-job-queue
docker-compose up
open 'http://localhost:3000' # Open the job producer web app
open 'http://localhost:3001' # Open the job dashboard
```

[installing-docker]: https://docs.docker.com/install/

## License

This is released under the MIT license. See [LICENSE.md](LICENSE.md) for more information.

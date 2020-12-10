# East Harlem Software

## Requirements

* Run a script -> Creates a new production droplet able to serve an exact copy of our current production server.
* Disaster recovery and business continuity requires that we be additionally able to:
	* Quickly point our domain name at the new droplet so that it can serve requests
	* Find a very recent copy of our customer data on this new droplet
* Scaling requires that:
	* A load balancer be able to send requests to this new droplet as well as old droplets

### Tools

- [vagrant-digitalocean][vagrant-digitalocean]

[vagrant-digitalocean]: https://github.com/devopsgroup-io/vagrant-digitalocean

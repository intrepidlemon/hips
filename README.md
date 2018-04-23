# hips

> A calculator that compares total hip replacement and hemiarthroplasty using monte carlo simulation

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## TODO

- [ ] relative value of successful total vs hemi
  - [ ] standard patient [HA=100, THA=100]
  - [ ] high demand patient [HA=90, THA=100]
  - [ ] very high demand patient [HA=90, THA=100]
- [X] additional dislocation rate of THA above HA
  - [ ] use slider or set values
- [x] clinically significant difference

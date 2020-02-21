// Main javascript entry point
// Should handle bootstrapping/starting application

"use strict";

import "core-js";
import "regenerator-runtime/runtime";
import $ from "jquery";
import "jquery.ripples";
$(() => {
  $("body").ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04
  });
});

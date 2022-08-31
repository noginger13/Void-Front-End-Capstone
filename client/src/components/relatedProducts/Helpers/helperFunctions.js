var shuffle = function (array) {
  var newArray = [];
  var innerFunction = function (items) {
    if (items.length === 0) {
      return newArray;
    }
    var index = Math.floor(Math.random() * items.length);
    newArray.push(items[index]);
    var deleted = items.splice(index, 1);
    innerFunction(items);
  };
  innerFunction(array);
  return newArray;
};

export function combineThem(related, product) {
  var combined = [];
  var relatedCopy = [];
  var productCopy = [];
  var combinedArray = [];
  for (let feature of related) {
    if (feature.value) {
      relatedCopy.push(feature.value);
      combined.push(feature.value);
    }
  }
  for (let item of product) {
    if (item.value) {
      productCopy.push(item.value);
      if (!combined.includes(item.value)) {
        combined.push(item.value);
      }
    }
  }
  combined = shuffle(combined);
  for (let item of combined) {
    var allFeatures = {};
    allFeatures.feature = item;
    allFeatures.hasProductFeature = false;
    allFeatures.hasRelatedFeature = false;
    if (relatedCopy.includes(item)) {
      allFeatures.hasRelatedFeature = true;
    }
    if (productCopy.includes(item)) {
      allFeatures.hasProductFeature = true;
    }
    combinedArray.push(allFeatures);
  }

  return combinedArray;
}

export function backClick(reference, back, forward) {
  horizontalSlide(reference, 'left', 1, 300, 2, back, forward);
}
export function forwardClick(reference, back, forward) {
  horizontalSlide(reference, 'right', 1, 300, 2, back, forward);
}

export function horizontalSlide(
  reference,
  direction,
  speed,
  distance,
  step,
  back,
  forward
) {
  var scrollTotal = 0;
  var scrollTimer = setInterval(function () {
    if (direction === 'left') {
      reference.current.scrollLeft -= step;
    } else {
      reference.current.scrollLeft += step;
    }
    scrollTotal += step;
    if (scrollTotal >= distance) {
      window.clearInterval(scrollTimer);
    }
    if (reference.current.scrollLeft > 0) {
      back.current.style.opacity = '1';
    } else {
      back.current.style.opacity = '0.1';
    }
    var maxScrolled =
      reference.current.scrollWidth - reference.current.clientWidth;
    if (maxScrolled === Math.ceil(reference.current.scrollLeft)) {
      forward.current.style.opacity = '0.1';
    } else {
      forward.current.style.opacity = '1';
    }
  }, speed);
}
//could use transition and transform to move things around
let belowScale = [{fraction:`${0}`, decimal:`${0}`}];


function below1() {
    for (let i = 1; i < 9; i++) {
	for (let k = i; k >= 0; k--) {
	    belowScale.push({fraction:`${k}/${i}`, decimal:`${k/i}`});
	}
    }

    for (let i = 0; i < belowScale.length; i++) {
	if (belowScale[i] == Infinity) {
	    belowScale.splice(i, 1);
	}
    }
    let poolA, poolB;

    for (let i = 0; i < belowScale.length; i++) {
	for (let k = 1; k < belowScale.length; k++) {
	    if (belowScale[k].decimal < belowScale[k-1].decimal) {
		poolA = belowScale[k].fraction;
		poolB = belowScale[k].decimal;
		belowScale[k].fraction = belowScale[k-1].fraction;
		belowScale[k].decimal = belowScale[k-1].decimal;
		belowScale[k-1].fraction = poolA;
		belowScale[k-1].decimal = poolB;
	    }
	}
    }

    for (let I = 0; I < 3; I++) {
	for (let i = 0; i < belowScale.length-1; i++) {
	    if (belowScale[i].decimal == belowScale[i+1].decimal) {
		belowScale.splice(i+1, 1);
	    }
	}
    }
    return belowScale;
}

let aboveScale = [{fraction:`${0}`, decimal:`${0}`}];

function above1() {
    for (let i = 1; i < 9; i++) {
	for (let k = i; k >= 0; k--) {
	    aboveScale.push({fraction:`${i}/${k}`, decimal:`${i/k}`});
	}
    }

    for (let i = 0; i < aboveScale.length; i++) {
	if (aboveScale[i] == Infinity) {
	    aboveScale.splice(i, 1);
	}
    }
    let poolA, poolB;

    for (let i = 0; i < aboveScale.length; i++) {
	for (let k = 1; k < aboveScale.length; k++) {
	    if (aboveScale[k].decimal < aboveScale[k-1].decimal) {
		poolA = aboveScale[k].fraction;
		poolB = aboveScale[k].decimal;
		aboveScale[k].fraction = aboveScale[k-1].fraction;
		aboveScale[k].decimal = aboveScale[k-1].decimal;
		aboveScale[k-1].fraction = poolA;
		aboveScale[k-1].decimal = poolB;
	    }
	}
    }

    for (let I = 0; I < 3; I++) {
	for (let i = 0; i < aboveScale.length-1; i++) {
	    if (aboveScale[i].decimal == aboveScale[i+1].decimal) {
		aboveScale.splice(i+1, 1);
	    }
	}
    }
    return aboveScale;
}

below1();
above1();

aboveScale.splice(0, 2);

let scale = belowScale.concat(aboveScale);

console.log(scale);



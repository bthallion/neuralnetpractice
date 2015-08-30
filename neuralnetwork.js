/**
 * Created by ben on 8/29/15.
 */
var weights = [1, 1, 1, 1],
    nodes;

function freshNodes() {
    nodes   = [
        new Neuron(weights[0]),
        new Neuron(weights[1]),
        new Neuron(weights[2]),
        new Neuron(weights[3])
    ];
}

function Neuron(wght) {
    var sum    = 0,
        weight = wght;

    this.input = function input(ipt) {
        var i;

        if (ipt instanceof Array) {
            for (i = 0; i < ipt.length; i++) {
                sum += ipt[i];
            }
        }
        else {
            sum += ipt;
        }
    };
    
    this.output = function output() {
        return weight * sum;
    };
}

function startNetwork(ipt1, ipt2) {
    freshNodes();
    nodes[0].input(ipt1);
    nodes[1].input(ipt2);
    nodes[2].input([nodes[1].output()]);
    nodes[3].input([nodes[0].output()]);
    console.log('input: '+ipt1+' '+ipt2);
    console.log('node 3: '+nodes[2].output());
    console.log('node 4: '+nodes[3].output()+'\n');
}

startNetwork(1, 1);
startNetwork(1, 0);
startNetwork(0, 1);
startNetwork(0, 0);
startNetwork(-1, 1);
startNetwork(0.3, 0.7);
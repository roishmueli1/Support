'use strice';//JS engine use strict parsing

var mongoose = require('mongoose'),
    Tk = require('./schemas/tk');

exports.createTkInstruction = (req, res) => {
    var newTkInstruction = new Tk({
        name: 		req.body.name,
        comment: 		req.body.comment
    });
    console.log('createTkInstruction:');
    console.log(newTkInstruction);

    newTkInstruction.save(
        (err) => {
            if(err) {
                console.log(`err: ${err}`);
                res.status(300).json(err);
            } else {
                console.log(`Saved document:`);
                res.status(200).json(newTkInstruction);
            }
        });
};
exports.getTkInstructions = (req, res) => {
  console.log('getTkInstructions');
  var show = {
		"id":1, "name":1
		};
	var q = Tk.find({});
	q.exec(function(err, TkInstructions)  {
		if (err) {
			console.log(`err: ${err}`);
			res.status(200).json(`{ err : ${err}`);
		}
		console.log(TkInstructions);
		res.status(200).json(TkInstructions);
	});
};
// exports.getState = (req, res) => {
// 	console.log(`getState: stateid = ${req.params.stateid}`);
//     var stateid = req.params.stateid;
//     if (stateid.length < 5) {
//       var id = {"id": Number(stateid) };
//     } else {
//       var id = { "_id": stateid };
//     }
//     State.findOne(id,
//         (err, state) => {
//             if (err) {
//                 console.log(`err: ${err}`);
//                 res.status(200).json(`{ err : ${err} }`);
//             }
//             console.log(state);
//             res.status(200).json(state);
//         }
//     );
// };
// exports.updateState = (req, res) => {
// 	var stateid = req.params.stateid;
//   if (stateid.length < 5) {
//     var id = {"id": Number(stateid) };
//   } else {
//     var id = { "_id": stateid };
//   }
//
// 	console.log(`updateState: stateid = ${req.params.stateid}`);
//   var params = {};
// 	if (req.body.name) {
// 		params.name = req.body.name;
// 	}
// 	if (req.body.id) {
// 		params.id = req.body.id;
// 	}
// 	if (req.body.methods) {
// 		params.methods = req.body.methods;
// 	}
// 	console.log(params);
//   var opts = {
//       new: true
//   };
//   State.findOneAndUpdate(id, params, opts,
//       (err, state) => {
//           if(err) {
//               console.log(`err: ${err}`);
//               res.status(300).json(err);
//           } else {
//               console.log(`Updated state: ${state}`)
//               res.status(200).json(state);
//           }
//       });
// };

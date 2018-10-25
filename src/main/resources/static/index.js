/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function buildHtmlInfo() {
    var b = document.getElementById("cit");
    console.log(b)
    axios.get('/climate/'+b.value)
            .then(function(result){
                    var myList = result.data;
                    var selector = document.getElementById("excelDataTable");
                    console.log(myList);
                    for(var prop in myList) {
                        console.log(prop,myList[prop]); 
                        mmy = myList[prop]
                        for(var prop2 in mmy) {
                            var columns = addAllColumnHeaders(mmy[prop2], selector);
                            break;
                        }
                        for(var prop2 in mmy) {
                            var row$ = $('<tr/>');
                             row$.append($('<td/>').html(prop2));
                            for(var prop3 in mmy[prop2]) {
                               var cellValue = mmy[prop2][prop3];
                               if (cellValue == null) cellValue = "";
                               row$.append($('<td/>').html(cellValue));
                            }
                        $(selector).append(row$);
                        }
                         
                    }
                    
            })
            .catch(function(error){
                    console.log(error);
                    errorMessage();
            });
  

  
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(myList, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');
  console.log(myList);
  for(var i in myList) {
    
    console.log(i)
    if ($.inArray(i, columnSet) == -1) {
        columnSet.push(myList[i]);
    }
  }
  $(selector).append(headerTr$);

  return columnSet;
}

$(document).ready(function () {
    $("table tr").each(function (index) {
        if(index%2 == 0)    $(this).addClass("rowEven");
        else                $(this).addClass("rowOdd");
    });
});

//Code Institute solution:
// $(document).ready(function () {
//     $("tr:odd").addClass("rowOdd");
//     $("tr:even").addClass("rowEven");
// });
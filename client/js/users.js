var Users= (function(){
    var creaUtente = function(nuovoutente){
            return $.ajax({
                    url: "http://localhost:3000/users",
                    method: "POST",
                    contentType: "application/json",
                    dataType: "json",
                    data: JSON.stringify(nuovoutente)
                        }).then(function(risposta){
                            console.log(risposta);
                            
                        }).catch(function(err){
                            console.log(err);
                        });
                                 }

        var getUsers= function(){
                    return $.ajax({
                        url: "http://localhost:3000/users",
                        method: "GET",
                        contentType: "application/json",
                        dataType: "json",

                    });
        }

        var deleteUser= function(id){
            return $.ajax({
                url: "http://localhost:3000/users/id/"+id,
                method: "DELETE",
                contentType: "application/json",
                dataType: "json",

           });
        }




        var getDetails = function(id){
            return $.ajax({

            url: "http://localhost:3000/users/id/"+id,
            method: "PUT",
            contentType: "application/json",
            dataType: "json",

        
        });
        }

    return {
        creaUtente:creaUtente,
        getUsers: getUsers,
        deleteUser: deleteUser,
        getDetails: getDetails
            }
                        })();
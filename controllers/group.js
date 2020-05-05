
module.exports= function(){

    return {
      SetRouting: function(router){
          router.get('/group/:name',this.groupPage);
      },
      groupPage:function(req,res){
          const name= req.params.name;
          res.render('groupchat/group',{title:"Chat Application - Group", name:name})
      }
    }
}
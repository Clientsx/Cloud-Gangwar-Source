mp.events.add('Server:KeyHandler:E', (player) => {
    if (player)
    {
        if (!player.isLoggedIn) return;
        try 
        {
            if (player.isActionRunning)
            {
                player.stopAnimation();
                return;
            }

            mp.colshapes.forEach(shape => {
                if (shape.isPointWithin(player.position) && shape.dimension == player.dimension) {
                    if (shape.shapeFunction == null) return;

                    if (shape.arg1 != null && shape.arg2 != null)
                    {
                        player.eval("mp.events.callRemote('" + shape.shapeFunction + "', '" + shape.arg1 + "', '" + shape.arg2 + "');");
                    }
                    else if (shape.arg2 == null && shape.arg1 != null)
                    {
                        player.eval("mp.events.callRemote('" + shape.shapeFunction + "', '" + shape.arg1 + "');");
                    }
                    else
                    {
                        player.eval("mp.events.callRemote('" + shape.shapeFunction + "');");
                    }
                }
            });
        } 
        catch (error)
        {
            console.log(error)
        }
    }
});
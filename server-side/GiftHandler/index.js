module.exports = {
    hasgiftused : async function(accountid)
    {
        const [rows, fields, err] = await cloudgw.query("SELECT * FROM gifts WHERE accountid = ?", [accountid])
        if (err) console.log(err)
        if(rows.length > 0){
            return false;
        }
        return true;
    },
    creategift : async function(accountid, gift)
    {
        const [rows, fields, err] = await cloudgw.query("INSERT INTO gifts SET accountid = ?, gift = ?", [accountid, gift])
        if (err) console.log(err);
    }
};
module.exports = function (dir, file_ext, callback)
{
	var fs = require('fs')
	var path = require('path')
	var result = []

	function handler(err,list)
	{
		if (err)
		{
			return callback(err)
		}
		
		for (var i in list) 
		{
			if (path.extname(list[i]) == ('.' + file_ext))
			{
				result.push(list[i])
			}
		}
		callback(null,result)
	}
	fs.readdir(dir,handler)
}


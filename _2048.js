window.onload = function()
{
	var imgs=document.querySelectorAll("#back img");
	var img_arr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var flag=false;

	var update_array=function()
	{
		for(i=0;i<imgs.length;i++)
		{
			img_arr[i]=Number(imgs[i].title);
		}
		return img_arr;
	};
	var demo=function(x)
	{
		var doing=[0,0,0,0];
		var z=0;
		for(i=0;i<4;)
		{
			if(x[i] == 0)
			{
				i++;
				continue;
			}
			for(j=i+1;j<4;j++)
			{
				if(x[j] == 0)
				{
					if(j == 3)
					{
						doing[z] = x[i];
						z++;
						i = 3;
					}
					continue;
				}
				else
				{
					if(x[i] == x[j])
					{
						doing[z] = (x[i] + x[j]);
						if(doing[z]==2048)
						{
							flag=true;
						}
						x[i] = 0;
						x[j] = 0;
						z++;
						i=j;
						break;
					}
					else
					{
						doing[z] = x[i];
						z++;
						i=j;
						break;
					}
				}
			}
			if(i == 3 && x[i] != 0)
			{
				doing[z]= x[i];
				z++;
				break;
			}
		}
		return doing;
	};
	var run=function(arr)
	{
		var getarr=demo
		([
			img_arr[arr[0]],
			img_arr[arr[1]],
			img_arr[arr[2]],
			img_arr[arr[3]],
		]);
		//console.log(getarr);
		for(i=0;i<getarr.length;i++)
		{
			imgs[arr[i]].setAttribute('title',getarr[i]);
			imgs[arr[i]].src='pic/'+getarr[i]+'.jpg';
		}
		return;
	};
	var ran=function()
	{
		update_array();
		var n= Math.floor(Math.random()*16);
		var m=(Math.ceil(Math.random()*2))*2;
		if(img_arr[n]==0)
		{
			imgs[n].setAttribute('title',m);
			imgs[n].src='pic/'+m+'.jpg';
		}
		else
		{
			ran();
		}
		update_array();
		return;
	};
	var x=document.getElementById('but');
	var begin =function()
	{
		flag = false;
		for(i=0;i<imgs.length;i++)
		{
			imgs[i].setAttribute('title',0);
			imgs[i].src='pic/'+0+'.jpg';
		}
		var y=Math.ceil(Math.random()*2);
		for(i=0;i<y;i++)
		{
			ran();
		}
		document.addEventListener('keydown',keydown);
	};
	var end=function()
	{
		for(i=0;i<4;i++)
		{
			for(j=0;j<4;j++)
			{
				var test=img_arr[i+4*j];
				if(test==0)
				{
					return false;
				}
				if(i<3 && img_arr[i+1+4*j]==test)
				{
					return false;
				}
				if(j<3 && img_arr[i+4+4*j]==test)
				{
					return false;
				}
			}
		}
		alert('Game Over');
		return true;
	}

	x.addEventListener('click',begin,true);
	function keydown(e)
	{
		update_array();
		switch(e.keyCode)
		{
			case 37:
				var t1=run([0,1,2,3]);
				var t2=run([4,5,6,7]);
				var t3=run([8,9,10,11]);
				var t4=run([12,13,14,15]);
				//this.console.log('z');
				break;
			case 38:
				var t1=run([0,4,8,12]);
				var t2=	 run([1,5,9,13]);
				var t3=run([2,6,10,14]);
				var t4=run([3,7,11,15]);
				//this.console.log('s');
				break;
			case 39:
				var t1=run([3,2,1,0]);
				var t2=run([7,6,5,4]);
				var t3=run([11,10,9,8]);
				var t4=run([15,14,13,12]);
				//this.console.log('y');
				break;
			case 40:  
				var t1=run([12,8,4,0]);
				var t2=run([13,9,5,1]);
				var t3=run([14,10,6,2]);
				var t4=run([15,11,7,3]);
				//this.console.log('x');
				break; 
		}
		if(flag)
		{
			alert('you win!');
			document.removeEventListener('keydown',keydown);
			return;
		}
		ran();
		end();
	}
}
window.onload = function()
{
    var imgs=document.querySelectorAll("#back img");
    //this.console.log(imgs);
    var doing=[];
    
    //console.log(doing);
    
    /*
    var newarr=function()
    {
        var arr=[];
        for(i=0;i<imgs.length;i++)
        {
            arr[i]=Number(imgs[i].title);
        }
        return arr;
    };
    */
    
    var demo=function(x)
    {
        doing=[0,0,0,0];
        var z=0;
        
        //var i=0;
        for(i=0;i<4;)
		{
			if(x[i] == 0)
			{
                i++;
                //alert("x[i]==0");
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
                    //alert("x[j]==0");
				    if(x[i] == x[j])
				    {
				    	doing[z] = (x[i] + x[j]);
				    	x[i] = 0;
					    x[j] = 0;
					    z++;
                        i=j;
                        break;
                        //alert("x[i]==x[j]");
			    	}
				    else
				    {
				      	doing[z] = x[i];
				    	z++;
                        i=j;
                        break;
                    //alert("x[i]!=x[j]");
                    }
                }
                //alert("for j="+ j);
			}
			if(i == 3 && x[i] != 0)
			{
				doing[z]= x[i];
                z++;
                //alert("if");
                break;
			}
        }
        //alert('demo');
        return doing;
    };
    //var test=[0,2,4,4];
    //console.log(test);
    //demo(test);
    //console.log(doing);
    var run=function(arr)
    {
        var getarr=demo
        ([
            Number(imgs[arr[0]].getAttribute('title')),
            Number(imgs[arr[1]].getAttribute('title')),
            Number(imgs[arr[2]].getAttribute('title')),
            Number(imgs[arr[3]].getAttribute('title')),
        ]);
        console.log(getarr);
        for(i=0;i<getarr.length;i++)
        {
            imgs[arr[i]].setAttribute('title',getarr[i]);
            imgs[arr[i]].src='pic/'+getarr[i]+'.jpg';
        }
        //alert('run');
        return;
    };
    var ran=function()
    {
        var n=Math.floor(Math.random()*16);
        var m=(Math.ceil(Math.random()*2))*2;
        if(Number(imgs[n].getAttribute('title'))==0)
        {
            imgs[n].setAttribute('title',m);
            imgs[n].src='pic/'+m+'.jpg';
        }
        else
        {
            ran();
        }
        //alert('random');
        return;
    };
    var x=document.getElementById('but');
    var begin =function()
    {
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
    };
    var end=function()
    {
        
        var ending=[];
        for(i=0;i<4;i++)
        {
            ending[i]=new Array();
            for(j=0;j<4;j++)
            {
                ending[i][j]=Number(imgs[i+j*4].getAttribute('title'));
            }
        }
        //赋值完成

        for(i=0;i<4;i++)
        {
            for(j=0;j<4;j++)
            {
                var test=ending[i][j];
                if(test==0)
                {
                    return false;
                }
                if(ending[i+1]!=undefined&&ending[i+1][j]==test)
                {
                    return false;
                }
                if(ending[i][j+1]!=undefined&&ending[i][j+1]==test)
                {
                    return false;
                }
            }
        }
        alert('Game Over');
        x.removeEventListener('click',begin);
        return true;
    }
    
    x.addEventListener('click',begin,true);
    //var tet=run([0,1,2,3]);
    //console.log(tet);
    //newarr();
    //this.console.log(arr);
    /*  arr[0]     arr[1]    arr[2]    arr[3]
        arr[4]     arr[5]    arr[6]    arr[7]
        arr[8]     arr[9]    arr[10]    arr[11]
        arr[12]     arr[13]    arr[14]    arr[15]
    */
    this.onkeydown = function(e)
    {
        switch(e.keyCode)
        {
            case 37:
                var t1=run([0,1,2,3]);
                var t2=run([4,5,6,7]);
                var t3=run([8,9,10,11]);
                var t4=run([12,13,14,15]);
                var r1=ran();
                //this.console.log('z');
                break;
            case 38:
                var t1=run([0,4,8,12]);
                var t2=  run([1,5,9,13]);
                var t3=run([2,6,10,14]);
                var t4=run([3,7,11,15]);
                var r1=ran();
                //this.console.log('s');
                break;
            case 39:
                var t1=run([3,2,1,0]);
                var t2=run([7,6,5,4]);
                var t3=run([11,10,9,8]);
                var t4=run([15,14,13,12]);
                var r1=ran();
                //this.console.log('y');
                break;
            case 40:  
                var t1=run([12,8,4,0]);
                var t2=run([13,9,5,1]);
                var t3=run([14,10,6,2]);
                var t4=run([15,11,7,3]);
                var r1=ran();
                //this.console.log('x');
                break; 
        }
        end();
    }
}
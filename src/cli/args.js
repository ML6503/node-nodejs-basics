export const parseArgs = () => {
    const prefix = 'RSS_';
    const pattern = new RegExp('^' + prefix);
    const envs = process.env;
    let result = '';
    console.info('\nEnvironment viarables with prefix RSS_: \n ');
    for(let v in envs) {
        
        if (pattern.test(v)) {            
            result += v +'='+envs[v]+'; ';            
        }
    }
    console.info(result);
   
};

parseArgs();
// function that parses environment variables with prefix RSS_ 
// and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
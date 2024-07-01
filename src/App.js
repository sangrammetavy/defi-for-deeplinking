
import './App.css';
import { useState } from 'react';


function App() {
  const[value,setvalue]=useState("airdrop.kaanch.com")
  const[value1,setvalue1]=useState("knch")
  const [contractaddress,setcontractaddress]=useState("contractaddress")
  const[ethaddress,setethaddresss]=useState("ethaddress")
  const[amount,setamount]=useState(0)
  const[kvdaddress,setkvdaddress]=useState("kvdaddress")
  



  
  return (
    <div className="App">


      {/* FOR URL  */}
      <label style={{fontWeight:'bold'}}>To Open url from browser</label>
      <br/>  
<label>Your Url Goes here</label>
<br/>
<input type='text' onChange={(e)=>{setvalue(e.target.value)}}/>

<br/>
<a>{`https://app.kaanch.link/browser?url=${value}`}</a>

<br/>
<a href={`https://app.kaanch.link/browser?url=${value}`}  >open url from browser</a>
<br/>

<br/>

{/* ///////////FOR COIN */}
<label style={{fontWeight:'bold'}}>To Open Coin</label>
<br/>   

<label>Your Coin symbol goes here</label>
<br/>
<input type='text' onChange={(e)=>{setvalue1(e.target.value)}}/>

<br/>
<a href={`https://app.kaanch.link/open_coin?asset=${value1}`} >Open_Coin</a>
<br/>
 <p>{`https://app.kaanch.link/open_coin?asset=${value1}`}</p>



 <br/>



 
{/* TO OPEN ASSET */}

<label style={{fontWeight:'bold'}}>Open Asset</label>
<br/>   

<label>Your contract address  goes here</label>
<br/>
<input type='text' onChange={(e)=>{setcontractaddress(e.target.value)}}/>

<br/>
<a href={`https://app.kaanch.link/open_asset?asset=${contractaddress}`} >Open Asset</a>
<br/>
 <p>{`https://app.kaanch.link/open_asset?asset=${contractaddress}`}</p>


 
 <br/>

{/* ///////////FOR ADD ASSET */}
<label style={{fontWeight:'bold'}}>Add Asset</label>
<br/>   

<label>Your contract address  goes here</label>
<br/>
<input type='text' onChange={(e)=>{setcontractaddress(e.target.value)}}/>

<br/>
<a href={`https://app.kaanch.link/add_asset?asset=${contractaddress}`} >Add Asset</a>
<br/>
 <p>{`https://app.kaanch.link/add_asset?asset=${contractaddress}`}</p>



 
 <br/>



{/* for send kaanch */}

 <label style={{fontWeight:'bold'}}>Send Kaanch</label>
<br/>   

<label>Your  address  goes here</label>
<br/>
<input type='text' onChange={(e)=>{setethaddresss(e.target.value)}}/>

<br/>
<label>Your  amount  goes here</label>
<br/>

<input type='text' onChange={(e)=>{setamount(e.target.value)}}/>

<br/>

<a href={`https://app.kaanch.link/send_knch?address=${ethaddress}&amount=${amount}`} >Send Payment</a>
<br/>
 <p>{`https://app.kaanch.link/send_knch?address=${ethaddress}&amount=${amount}`}</p>


 <br/>


 {/* for send token */}

 <label style={{fontWeight:'bold'}}>Send Token</label>
<br/>   

<label>Your  address  goes here</label>
<br/>
<input type='text' onChange={(e)=>{setethaddresss(e.target.value)}}/>

<br/>
<label>Your  amount  goes here</label>
<br/>

<input type='text' onChange={(e)=>{setamount(e.target.value)}}/>

<br/>

<label>Your  contractaddress  goes here</label>
<br/>

<input type='text' onChange={(e)=>{setcontractaddress(e.target.value)}}/>

<br/>

<a href={`https://app.kaanch.link/send_token?asset=${contractaddress}&address=${ethaddress}&amount=${amount}`} >Send Payment</a>
<br/>
 <p>{`https://app.kaanch.link/send_token?asset=${contractaddress}&address=${ethaddress}&amount=${amount}`}</p>


 <br/>

{/* to open staking */}

// <br/><br/>

// <label style={{fontWeight:'bold'}}>To open staking of any particular KVD</label>
//       <br/>  
// <label>Your KVDaddress Goes here</label>
// <br/>
// <input type='text' onChange={(e)=>{setkvdaddress(e.target.value)}}/>

// <br/>
// <a>{`https://app.kaanch.link/staking?kvd_address=${kvdaddress}`}</a>

// <br/>
// <a href={`https://app.kaanch.link/staking?kvd_address=${kvdaddress}`} >Open Staking</a>
// <br/>

{/* for stake  */}
<br/><br/>

<label style={{fontWeight:'bold'}}>To stake delegate</label>
      <br/>  
<label>Your KVDaddress Goes here</label>
<br/>


<input type='text' onChange={(e)=>{setkvdaddress(e.target.value)}}/>

<br/>
<br/>  
<label>Your amount Goes here</label>
<br/>
<br/>
<input type='text' onChange={(e)=>{setamount(e.target.value)}}/>
<br/>
<a>{`https://app.kaanch.link/stake_delegate?kvd_address=${kvdaddress}&amount=${amount}`}</a>

<br/>
<a href={`https://app.kaanch.link/stake_delegate?kvd_address=${kvdaddress}&amount=${amount}`} >Delegate Now</a>
<br/>



{/* for unstake  */}
<br/><br/>

<label style={{fontWeight:'bold'}}>To unstake</label>
      <br/>  
<label>Your KVDaddress Goes here</label>
<br/>
<input type='text' onChange={(e)=>{setkvdaddress(e.target.value)}}/>

<br/>
<a>{`https://app.kaanch.link/stake_undelegate?kvd_address=${kvdaddress}`}</a>

<br/>
<a href={`https://app.kaanch.link/stake_undelegate?kvd_address=${kvdaddress}`} >Unstake/undelegate now</a>
<br/>

<br/>

{/* for claim reward  */}
<br/><br/>

<label style={{fontWeight:'bold'}}>To claim reward</label>
      <br/>  
<label>Your KVDaddress Goes here</label>
<br/>
<input type='text' onChange={(e)=>{setkvdaddress(e.target.value)}}/>

<br/>
<a>{`https://app.kaanch.link/stake_claim_rewards?kvd_address=${kvdaddress}`}</a>

<br/>
<a href={`https://app.kaanch.link/stake_claim_rewards?kvd_address=${kvdaddress}`} >claim your reward now</a>
<br/>

<br/>












    </div>
  );
}

export default App;

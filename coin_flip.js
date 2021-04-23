var i;
var block = await web3.eth.getBlock("pending");
var prevNumber = block.number - 1;
var blockNumber = prevNumber;
for (i = 0; i < 11; i++) {
    while (prevNumber == blockNumber){
        await new Promise(r => setTimeout(r, 1000));
        try{
            // for some reason getting last block does not works properly
            // getting block previous to pending one seems ok
            block = await web3.eth.getBlock("pending");
        } catch (e) {
            // sometimes getting block raises error, it may be ignored
        }
        blockNumber = block.number - 1;
    }
    lastBlock = await web3.eth.getBlock(blockNumber);
    contract.flip(((lastBlock.hash / 57896044618658097711785492504343953926634992332820282019728792003956564819968) | 0) == 1 ? true : false, {gasPrice: 20000000000, gas: 1000000}).catch(err => console.error('trouble with tx!\n' + err));
    prevNumber = blockNumber;
}

# As8kfSBEwBEsMQFU4HfPAvKjuUVDudn7cR8q4hy277RV
solana-keygen new --outfile ~/.config/solana/millena.json
    Wrote new keypair to /home/web-dev-02/.config/solana/millena.json
=============================================================================
pubkey: As8kfSBEwBEsMQFU4HfPAvKjuUVDudn7cR8q4hy277RV
=============================================================================
Save this seed phrase and your BIP39 passphrase to recover your new keypair:
cricket magic combine pepper door latin ivory eye carpet observe maze mandate
=============================================================================


bundlr balance As8kfSBEwBEsMQFU4HfPAvKjuUVDudn7cR8q4hy277RV \
--host https://devnet.bundlr.network \
--currency solana \
--timeout 200 


bundlr fund 60000 \
--host https://devnet.bundlr.network \
--currency solana \
--timeout 200 \
--provider-url https://api.mainnet-beta.solana.com \
--wallet /home/web-dev-02/.config/solana/millena.json

# Uploaded to https://arweave.net/5NqZ9KWPqxiYQygC9cYtVzBOb0bh8a6MDa9QnnT5Z_0
bundlr upload Placeholder/placeholder.png \
--host https://devnet.bundlr.network \
--currency solana \
--timeout 200 \
--wallet /home/web-dev-02/.config/solana/millena.json

# Uploaded to https://arweave.net/KrKghMFJ0I8KIZ0Ehwptt1C2KAmbVvfyHj2EDAVRUcs
bundlr upload Placeholder/placeholder.json \
--host https://devnet.bundlr.network \
--currency solana \
--timeout 200 \
--wallet /home/web-dev-02/.config/solana/millena.json

ts-node js/packages/cli/src/candy-machine-v2-cli.ts upload \
    -e devnet \
    -k ~/.config/solana/millena.json \
    -cp config.json \
    -c example \
    assets

    wallet public key: As8kfSBEwBEsMQFU4HfPAvKjuUVDudn7cR8q4hy277RV
Using cluster devnet
Beginning the upload for 7777 (img+json) pairs
started at: 1657605715282
initializing candy machine
Candy machine address:  6ygJHXFfTdSMVU9V4WNHbS4PojeYa5S4EVrgrM9MqGVm
Collection metadata address:  Be3Rb8Ng5uACPExfXG7M5JCETCtfnZTFSg6bD8JJ4ZNi
Collection metadata authority:  As8kfSBEwBEsMQFU4HfPAvKjuUVDudn7cR8q4hy277RV
Collection master edition address:  5QMYZggpuaEzPEPr3Bwq6gVnuAKAzDHz6Vdt9xvEe4Wu
Collection mint address:  8weSM3G5kBQUSKU3oTpX
nfGzR2kBfDMY2eyNaninBkDY
Collection PDA address:  ETe7FQW46CjUcNWDQUGNJ36VyiYa9Xnu7jp5cgM3cya5
Collection authority record address:  2tbxqM3JAFTDn74UvEXFXpRnHWDD1B5orBNyrqBkVkHc
Collection:  {
  collectionMetadata: 'Be3Rb8Ng5uACPExfXG7M5JCETCtfnZTFSg6bD8JJ4ZNi',
  collectionPDA: 'ETe7FQW46CjUcNWDQUGNJ36VyiYa9Xnu7jp5cgM3cya5',
  txId: '5U6zfwdgWSZ8mFQsNoyS5Pe4Gt5UGewbbENFBD7qtub8FU2Cni4BwcoQkCMQfcXx1egHYyJyYYB8D2Bkd6JLzntn'
}
initialized config for a candy machine with publickey: 6ygJHXFfTdSMVU9V4WNHbS4PojeYa5S4EVrgrM9MqGVm
[0] out of [7777] items have been uploaded
Starting upload for [7777] items, format {"mediaExt":".png","index":"0"}
Uploading to nft.storage in 156 batches



===========

wallet public key: As8kfSBEwBEsMQFU4HfPAvKjuUVDudn7cR8q4hy277RV
Using cluster devnet
Beginning the upload for 7777 (img+json) pairs
started at: 1657617744563
config for a candy machine with publickey: 6ygJHXFfTdSMVU9V4WNHbS4PojeYa5S4EVrgrM9MqGVm has been already initialized
[1250] out of [7777] items have been uploaded
Starting upload for [6527] items, format {"mediaExt":".png","index":"1250"}



# 404586c0ab7fb625c8ca079e8f96f99b md5


ts-node js/packages/cli/src/candy-machine-v2-cli.ts update_candy_machine \
    -e devnet \
    -k ~/.config/solana/millena.json \
    -cp config.json \
    -c example


# wallet public key: As8kfSBEwBEsMQFU4HfPAvKjuUVDudn7cR8q4hy277RV
Using cluster devnet
update_candy_machine finished 49vtCDoYT3N6hTjawWm2ysVTq77Jijt1sp8Z6UNRBnQLAaxSwYcrnoKkJdPVjvLNb8vrtCUeh9SFpBkAcjvmiygE

# metaboss snapshot holders --creator 6ygJHXFfTdSMVU9V4WNHbS4PojeYa5S4EVrgrM9MqGVm --v2 --output ./ --timeout 200

# MILLENABOTS #1 - https://nftstorage.link/ipfs/bafybeiakvc6njgvazo5ke5mxc3qykmmogphmykrbz24wck4cb2lgtgydai/metadata.json
metaboss decode mint --account GV14vAFY4mAHiDf2k5xYTuYfL4BvEbcgXSP5qAUnjM9W -o ./

# MILLENABOTS #2 - https://nftstorage.link/ipfs/bafybeibcudnuxhzq5bqxtqqc72ltjdzkwhrjtfzewwgfeklqpajlgdprwa/metadata.json
metaboss decode mint --account 2xKDdXoApwZ6Jg67vwJcAVRaBATEEB6FBRdRH6bAd4uD -o ./

metaboss update uri \
    --keypair ~/.config/solana/millena.json \
    --account GV14vAFY4mAHiDf2k5xYTuYfL4BvEbcgXSP5qAUnjM9W \
    --new-uri https://nftstorage.link/ipfs/bafybeiakvc6njgvazo5ke5mxc3qykmmogphmykrbz24wck4cb2lgtgydai/metadata.json

metaboss update uri \
    --keypair ~/.config/solana/millena.json \
    --account 2xKDdXoApwZ6Jg67vwJcAVRaBATEEB6FBRdRH6bAd4uD \
    --new-uri https://nftstorage.link/ipfs/bafybeibcudnuxhzq5bqxtqqc72ltjdzkwhrjtfzewwgfeklqpajlgdprwa/metadata.json


bundlr price 400000 \
    --host https://devnet.bundlr.network \
    --currency solana \
    --timeout 200
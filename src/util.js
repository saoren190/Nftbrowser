const origin = "https://admin.moralis.io";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImE2ZTI1ZjU1LTc2MmUtNDYwOS04NGFlLWQyODdjNTNlZTg1ZCIsIm9yZ0lkIjoiMzUzOTcwIiwidXNlcklkIjoiMzYzODA3IiwidHlwZUlkIjoiMDhjZWYxZWItNDcwYy00NTFmLWEzNTQtZWZiZjkwZTZiMTc0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTI1ODYxNTIsImV4cCI6NDg0ODM0NjE1Mn0.jNOFtWzhrQP7o2-1TIR_uu-GIWIluULrX7M3RRNTFlw";


export const getContractNFTs = async (tokenAddress) => {
    const url = new URL('${origin}/api/v2/nft/${tokenAddress}');
    url.searchParams.append("chain", "eth");
    url.searchParams.append("format", "decimal");
    url.searchParams.append("limit", "20");

    const response = await fetch(url, {
        headers: {
            accept: "application/json",
            "X-API-KEY": apiKey,
        },
    });

    return response.json();
};

export const getContractTrades = async (tokenAddress) => {
    const url = new URL('${origin}/api/v2/nft/${tokenAddress}/trades');
    url.searchParams.append("chain", "eth");
    url.searchParams.append("format", "decimal");
    url.searchParams.append("limit", "20");

    const response = await fetch(url, {
        headers: {
            accept: "application/json",
            "X-API-KEY": apiKey,
        },
    });

    return response.json();
};

export const getNFTTransfers = async (tokenAddress, tokenId) => {
    const url = new URL('${origin}/api/v2/nft/${tokenAddress}/transfers');
    url.searchParams.append("chain", "eth");
    url.searchParams.append("format", "decimal");
    url.searchParams.append("limit", "20");

    const response = await fetch(url, {
        headers: {
            accept: "application/json",
            "X-API-KEY": apiKey,
        },
    });

    return response.json();
};
$(document).ready(function () {
	fetchToken("ethereum");
});
function fetchToken(chain) {
	$.ajax({
		type: "GET",
		url: "https://price-api.mayan.finance/v3/tokens?chain=" + chain,
		success: function (res) {
			const dynamicKey = Object.keys(res)[0];
			const tokens = res[dynamicKey]; // Access the array using the dynamic key

			// Loop through each token and display the name and logo
			tokens.forEach((token) => {
				const tokenHtml = `
            <div class="token-item">
            <div>
             <img src="${token.logoURI}" alt="${
					token.name
				} logo" class="token-logo">
            </div>
            <div>
                <div class="token-name">${token.symbol}</div>
                <small>${token.coingeckoId.toUpperCase()} ${token.contract
					.slice(0, 4)
					.toUpperCase()}...${token.contract
					.slice(-4)
					.toUpperCase()}</small>
                </div>
            </div>
        `;
				$("#token-list").append(tokenHtml);
			});
		},
	});
}
$(".from").click(function () {
	$(".token-item").off("click").on("click", function () {
		// Extract the name and logo URL of the clicked token item
		const tokenName = $(this).find(".token-name").text();
		const tokenLogoUrl = $(this).find(".token-logo").attr("src");
		$("#fromToken").html("<span>" + tokenName + "</span>");

		$(".from-placeholder").html(
			`<img src="${tokenLogoUrl}" width="56" height="56">`
		);
        $("#fromModal").modal('hide');
		// Log the results or use them as needed
		console.log("Token Name:", tokenName);
		console.log("Token Logo URL:", tokenLogoUrl);
	});
});

$(".to").click(function () {
	$(".token-item").off("click").on("click", function () {
		// Extract the name and logo URL of the clicked token item
		const tokenName = $(this).find(".token-name").text();
		const tokenLogoUrl = $(this).find(".token-logo").attr("src");
		$("#toToken").html("<span>" + tokenName + "</span>");

		$(".to-placeholder").html(
			`<img src="${tokenLogoUrl}" width="56" height="56">`
		);
        $("#fromModal").modal('hide');
		// Log the results or use them as needed
		console.log("Token Name:", tokenName);
		console.log("Token Logo URL:", tokenLogoUrl);
	});
});

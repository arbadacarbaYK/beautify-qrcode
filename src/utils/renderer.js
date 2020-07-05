export function createRenderer(renderer) {
    const defaultViewBox = function (qrcode) {
        if (!qrcode) return '0 0 0 0';

        const nCount = qrcode.getModuleCount();
        return (
            String(-nCount / 5) +
            ' ' +
            String(-nCount / 5) +
            ' ' +
            String(nCount + (nCount / 5) * 2) +
            ' ' +
            String(nCount + (nCount / 5) * 2)
        );
    };

    renderer = {
        ...{
            getViewBox: defaultViewBox,
            listPoints: (qrcode, params) => {
                return [];
            },
            getParamInfo: () => {
                return [];
            },
            beginRendering: ({ qrcode, params, setParamInfo }) => {},
            beforeListing: ({ qrcode, params, setParamInfo }) => {},
            afterListing: ({ qrcode, params, setParamInfo }) => {},
        },
        ...renderer,
    };

    return ({ qrcode, params }) => {
        return `
            <svg className="Qr-item-svg" width="100%" height="100%" viewBox="${renderer.getViewBox(
                qrcode
            )}" fill="white"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                ${renderer.listPoints(qrcode, params).join('')}
            </svg>
        `;
    };
}

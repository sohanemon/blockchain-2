export default function CoinLib() {
  return (
    <div
      style={{
        height: 62,
        backgroundColor: '#1D2330',
        overflow: 'hidden',
        boxSizing: 'border-box',
        border: '1px solid #282E3B',
        borderRadius: 0,
        textAlign: 'right',
        lineHeight: 14,
        blockSize: 62,
        fontSize: 12,
        fontFeatureSettings: 'normal',
        textSizeAdjust: '100%',
        // boxShadow: 'inset 0 -20px 0 0 #262B38',
        padding: 0,
        margin: 0,
        width: '100%',
      }}
    >
      <div style={{ height: 40, padding: 0, margin: 0, width: '100%' }}>
        <iframe
          height="36px"
          src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
          style={{ border: 0, margin: 0, padding: 0 }}
          width="100%"
        />
      </div>
    </div>
  );
}

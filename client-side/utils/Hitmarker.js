var HitObject = /** @class */ (function () {
    function HitObject(amount, position) {
        this.count = 0;
        this.amount = amount;
        this.position = position;
    }
    return HitObject;
}());
var HitText = /** @class */ (function () {
    function HitText() {
        this.list = [];
    }
    HitText.prototype.add = function (amount, position) {
        this.list.push(new HitObject(amount, position));
    };
    HitText.prototype.render = function () {
        this.list.forEach(function (element) {
            mp.game.graphics.drawText(element.amount.toString(), [element.position.x, element.position.y, element.position.z + 1.4], { font: 2, centre: true, color: [255, 255, 255, 155 - element.count], scale: [0.3, 0.3], outline: true });
            element.count += 3;
            element.position.z += 0.03;
            if (element.count > 155) {
                var find = Hits.list.findIndex(function (elemen) { return elemen == element; });
                Hits.list.splice(find, 1);
            }
        });
    };
    return HitText;
}());
var Hits = new HitText();
mp.events.add("render", () => {
    Hits.render();
});
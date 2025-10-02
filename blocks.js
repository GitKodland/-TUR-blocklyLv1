// === TOOLBOX ===
const toolboxXml = `
<xml id="toolbox" style="display: none">
    <block type="move_up"></block>
    <block type="move_down"></block>
    <block type="move_left"></block>
    <block type="move_right"></block>
    <block type="take_carrot"></block>
</xml>`;

// === Блок "Когда запущено" ===
Blockly.Blocks['when_run'] = {
  init: function () {
    this.appendDummyInput().appendField('Когда запущено ▶');
    this.setColour('#4f46e5');
    this.setNextStatement(true, null);
    this.setDeletable(false);
    this.setMovable(false);
  }
};
Blockly.JavaScript['when_run'] = function (block) {
  return ''; // стартовый блок кода не добавляет
};

// === Блоки движения ===
function makeMoveBlock(type, label, dir) {
  Blockly.Blocks[type] = {
    init: function () {
      this.appendDummyInput().appendField(label);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#10b981');
    }
  };
  Blockly.JavaScript[type] = function (block) {
    return `program.push(["move","${dir}"]);` + "\n";
  };
}

makeMoveBlock('move_up', 'Шаг вверх ⬆️', 'up');
makeMoveBlock('move_down', 'Шаг вниз ⬇️', 'down');
makeMoveBlock('move_left', 'Шаг влево ⬅️', 'left');
makeMoveBlock('move_right', 'Шаг вправо ➡️', 'right');

// === Новый блок "Взять морковку" ===
Blockly.Blocks['take_carrot'] = {
  init: function () {
    this.appendDummyInput().appendField("Взять 🥕");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#f59e0b');
    this.setTooltip("Взять морковку, если стоишь на ней.");
  }
};
Blockly.JavaScript['take_carrot'] = function (block) {
  return `program.push(["take"]);` + "\n";
};

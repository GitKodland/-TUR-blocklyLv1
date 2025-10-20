// === TOOLBOX ===
const toolboxXml = `
<xml id="toolbox" style="display: none">
    <block type="move_up"></block>
    <block type="move_down"></block>
    <block type="move_left"></block>
    <block type="move_right"></block>
    <block type="take_carrot"></block>
</xml>`;

// === Block "When launched" ===
Blockly.Blocks['when_run'] = {
  init: function () {
    this.appendDummyInput().appendField('When launched ▶');
    this.setColour('#4f46e5');
    this.setNextStatement(true, null);
    this.setDeletable(false);
    this.setMovable(false);
  }
};
Blockly.JavaScript['when_run'] = function (block) {
  return ''; // стартовый блок кода не добавляет
};

// === Movement blocks ===
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

makeMoveBlock('move_up', 'Move up ⬆️', 'up');
makeMoveBlock('move_down', 'Move down ⬇️', 'down');
makeMoveBlock('move_left', 'Move left ⬅️', 'left');
makeMoveBlock('move_right', 'Move right ➡️', 'right');

// === New block "Take a carrot" ===
Blockly.Blocks['take_carrot'] = {
  init: function () {
    this.appendDummyInput().appendField("Take 🥕");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#f59e0b');
    this.setTooltip("Take the carrot if you are standing on it.");
  }
};
Blockly.JavaScript['take_carrot'] = function (block) {
  return `program.push(["take"]);` + "\n";
};

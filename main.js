var ruleId = 0;
var parameterId = 0;
var ruleString = "rule-";
var paramString = "parameter-";

function addElement(parentId, elementTag, elementId, html) {
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);

    document.getElementById("ruleTitle" + ruleId).innerHTML = "Rule " + (ruleId + 1);
}

function addParam(parentId, elementTag, elementId, html) {
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function removeRule(event) {
    var parentId = event.target.parentNode.parentNode.parentNode.parentNode.id;
    console.log("removeRuleId -> ", parentId);

    if (parentId != "rule") {
        var element = document.getElementById(parentId);
        console.log("element - ", element);

        element.parentNode.removeChild(element);
    }
}

function removeParam(event) {
    console.log("removeId -> ", event.target.parentNode.parentNode.parentNode.id);

    var parentId = event.target.parentNode.parentNode.parentNode.id;
    var element = document.getElementById(parentId);
    console.log("element - ", element);

    element.parentNode.removeChild(element);
}

function addRule() {
    ruleId++;
    var html =
        '<div class="row">' +
        '<div class="col">' +
        '<p id="ruleTitle' + ruleId + '" class="mt-2 mb-1"></p>' +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-2">' +
        '<select class="form-control" id="dropdown2">' +
        '<option>aff_sub</option>' +
        '</select>' +
        '</div>' +
        '<div class="col-2">' +
        '<select class="form-control" id="dropdown3">' +
        '<option>is</option>' +
        '</select>' +
        '</div>' +
        '<div id="' + ruleString + ruleId + paramString + parameterId + '" class="col">' +
        '<div class="input-group pb-2">' +
        '<input type="text" class="form-control" id="title" placeholder="insert parameter" aria-describedby="addRuleAppend">' +
        '<div class="input-group-append">' +
        '<span class="add-parameter-link" id="addRuleAppend+ruleId" onclick="addParamClicked(event)">add rule</span>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-2">' +
        '<button type="button" class="btn" onclick="removeRule(event)"><i class="fa fa-minus-circle"></i></button>' +
        '</div>' +
        '</div>';
    addElement('rule', 'div', 'rule-' + ruleId, html);
}

function addParamClicked(event) {
    console.log("Test -> ", event.target.parentNode.parentNode.parentNode.id);

    parameterId++;
    var html = '<div class="input-group pb-2">' +
        '<input type="text" class="form-control" id="title" placeholder="insert parameter" aria-describedby="addRuleAppend">' +
        '<div class="input-group-append">' +
        '<span class="remove-parameter-link" id="removeRuleAppend" onclick="removeParam(event)">remove</span>' +
        '</div>' +
        '</div>';
    addParam(event.target.parentNode.parentNode.parentNode.id, 'div', ruleString + ruleId + paramString + parameterId, html);
}
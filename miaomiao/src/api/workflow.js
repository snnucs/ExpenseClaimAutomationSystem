import request from "@/utils/request";

export function ListWorkflow() {
  return request({
    url: "workflow/workflows/",
    method: "get"
  });
}
export function DeleteWorkflow(id) {
  return request({
    url: "workflow/workflows/" + id + "/",
    method: "delete"
  });
}
export function GetInitState(workflowId) {
  return request({
    url: "workflow/workflows/" + workflowId + "/init_state/",
    method: "get"
  });
}
export function ListWorkflowState(id) {
  return request({
    url: "workflow/workflows/" + id + "/states/",
    method: "get"
  });
}
export function DeleteState(id) {
  return request({
    url: "workflow/states/" + id + "/",
    method: "delete"
  });
}
export function CreateState(params) {
  return request({
    url: "workflow/states/",
    method: "post",
    data: params
  });
}
export function CreateTran(params) {
  return request({
    url: "workflow/transitions/",
    method: "post",
    data: params
  });
}
export function WorkflowTransitions(id) {
  return request({
    url: "workflow/workflows/" + id + "/transitions/",
    method: "get"
  });
}
export function ListWorkflowFields(id) {
  return request({
    url: "workflow/workflows/" + id + "/fields/",
    method: "get"
  });
}
export function ListTran(id) {
  return request({
    url: "workflow/workflows/" + id + "/transitions/",
    method: "get"
  });
}

export function DeleteTran(id) {
  return request({
    url: "workflow/transitions/" + id + "/",
    method: "delete"
  });
}
export function ListDIY(id) {
  return request({
    url: "workflow/workflows/" + id + "/fields/",
    method: "get"
  });
}
export function DeleteDIY(id) {
  return request({
    url: "workflow/fields/" + id + "/",
    method: "delete"
  });
}
export function CreateWorkflow(params) {
  return request({
    url: "workflow/workflows/",
    method: "post",
    data: params
  });
}
export function CreateCustomField(params) {
  return request({
    url: "workflow/fields/",
    method: "post",
    data: params
  });
}

/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../fetch.pb"
import * as MatrixhubV1alpha1Utils from "./utils.pb"

export enum FileType {
  DIR = "DIR",
  FILE = "FILE",
}

export type ListModelsRequest = {
  label?: string
  search?: string
  sort?: string
  page?: number
  pageSize?: number
}

export type ListModelsResponse = {
  item?: Model[]
  pagination?: MatrixhubV1alpha1Utils.Pagination
}

export type GetModelRequest = {
  project?: string
  modelName?: string
}

export type GetModelResponse = {
  model?: Model
}

export type CreateModelRequest = {
  project?: string
  modelName?: string
}

export type CreateModelResponse = {
}

export type DeleteModelRequest = {
  project?: string
  modelName?: string
}

export type DeleteModelResponse = {
}

export type ListModelBranchesRequest = {
  project?: string
  modelName?: string
  page?: number
  pageSize?: number
}

export type ListModelBranchesResponse = {
  items?: Branch[]
}

export type ListModelTagsRequest = {
  project?: string
  modelName?: string
  page?: number
  pageSize?: number
}

export type ListModelTagsResponse = {
  items?: Label[]
}

export type GetModelLastCommitRequest = {
  project?: string
  modelName?: string
}

export type GetModelLastCommitResponse = {
  id?: string
  message?: string
  authorName?: string
  authorEmail?: string
  createdAt?: string
}

export type GetModelCommitRequest = {
  project?: string
  modelName?: string
  commitId?: string
}

export type GetModelCommitResponse = {
  id?: string
  message?: string
  authorName?: string
  authorEmail?: string
  createdAt?: string
}

export type GetModelTreeCommitsRequest = {
  project?: string
  modelName?: string
  ref?: string
  path?: string
}

export type GetModelTreeCommitsResponse = {
  items?: GetModelCommitResponse[]
}

export type GetModelTreeRequest = {
  project?: string
  modelName?: string
  ref?: string
}

export type GetModelTreeResponse = {
  items?: GetModelBlobResponse[]
}

export type GetModelBlobRequest = {
  project?: string
  modelName?: string
  ref?: string
  path?: string
}

export type GetModelBlobResponse = {
  name?: string
  type?: FileType
  size?: string
  path?: string
  sha?: string
  lfs?: boolean
  content?: string
}

export type Model = {
  id?: number
  name?: string
  nickname?: string
  defaultBranch?: string
  createdAt?: string
  updatedAt?: string
  cloneUrls?: CloneUrls
  tags?: Tag[]
}

export type CloneUrls = {
  sshUrl?: string
  httpUrl?: string
}

export type Label = {
  id?: number
  name?: string
  createdAt?: string
  updatedAt?: string
}

export type Branch = {
  name?: string
  message?: string
}

export type Tag = {
  name?: string
}

export class Models {
  static ListModels(req: ListModelsRequest, initReq?: fm.InitReq): Promise<ListModelsResponse> {
    return fm.fetchReq<ListModelsRequest, ListModelsResponse>(`/api/v1alpha1/models?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static GetModel(req: GetModelRequest, initReq?: fm.InitReq): Promise<GetModelResponse> {
    return fm.fetchReq<GetModelRequest, GetModelResponse>(`/api/v1alpha1/models/${req["project"]}/${req["modelName"]}?${fm.renderURLSearchParams(req, ["project", "modelName"])}`, {...initReq, method: "GET"})
  }
  static CreateModel(req: CreateModelRequest, initReq?: fm.InitReq): Promise<CreateModelResponse> {
    return fm.fetchReq<CreateModelRequest, CreateModelResponse>(`/api/v1alpha1/models/${req["project"]}/${req["modelName"]}`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteModel(req: DeleteModelRequest, initReq?: fm.InitReq): Promise<DeleteModelResponse> {
    return fm.fetchReq<DeleteModelRequest, DeleteModelResponse>(`/api/v1alpha1/models/${req["project"]}/${req["modelName"]}`, {...initReq, method: "DELETE"})
  }
  static ListModelBranches(req: ListModelBranchesRequest, initReq?: fm.InitReq): Promise<ListModelBranchesResponse> {
    return fm.fetchReq<ListModelBranchesRequest, ListModelBranchesResponse>(`/api/v1alpha1/models/${req["project"]}/${req["modelName"]}/branches?${fm.renderURLSearchParams(req, ["project", "modelName"])}`, {...initReq, method: "GET"})
  }
  static ListModelTags(req: ListModelTagsRequest, initReq?: fm.InitReq): Promise<ListModelTagsResponse> {
    return fm.fetchReq<ListModelTagsRequest, ListModelTagsResponse>(`/api/v1alpha1/models/${req["project"]}/${req["modelName"]}/tags?${fm.renderURLSearchParams(req, ["project", "modelName"])}`, {...initReq, method: "GET"})
  }
  static GetModelLastCommit(req: GetModelLastCommitRequest, initReq?: fm.InitReq): Promise<GetModelLastCommitResponse> {
    return fm.fetchReq<GetModelLastCommitRequest, GetModelLastCommitResponse>(`/api/v1alpha1/models/${req["project"]}/${req["modelName"]}/last_commit?${fm.renderURLSearchParams(req, ["project", "modelName"])}`, {...initReq, method: "GET"})
  }
  static GetModelCommit(req: GetModelCommitRequest, initReq?: fm.InitReq): Promise<GetModelCommitResponse> {
    return fm.fetchReq<GetModelCommitRequest, GetModelCommitResponse>(`/api/v1alpha1/models/${req["project"]}/${req["modelName"]}/commits/${req["commitId"]}?${fm.renderURLSearchParams(req, ["project", "modelName", "commitId"])}`, {...initReq, method: "GET"})
  }
  static GetModelTreeCommits(req: GetModelTreeCommitsRequest, initReq?: fm.InitReq): Promise<GetModelTreeCommitsResponse> {
    return fm.fetchReq<GetModelTreeCommitsRequest, GetModelTreeCommitsResponse>(`/api/v1alpha1/models/${req["project"]}/${req["modelName"]}/refs/${req["ref"]}/tree_commits/${req["path"]}?${fm.renderURLSearchParams(req, ["project", "modelName", "ref", "path"])}`, {...initReq, method: "GET"})
  }
  static GetModelTree(req: GetModelTreeRequest, initReq?: fm.InitReq): Promise<GetModelTreeResponse> {
    return fm.fetchReq<GetModelTreeRequest, GetModelTreeResponse>(`/api/v1alpha1/models/${req["project"]}/${req["modelName"]}/refs/${req["ref"]}/tree?${fm.renderURLSearchParams(req, ["project", "modelName", "ref"])}`, {...initReq, method: "GET"})
  }
  static GetModelBlob(req: GetModelBlobRequest, initReq?: fm.InitReq): Promise<GetModelBlobResponse> {
    return fm.fetchReq<GetModelBlobRequest, GetModelBlobResponse>(`/api/v1alpha1/models/${req["project"]}/${req["modelName"]}/refs/${req["ref"]}/blob/${req["path"]}?${fm.renderURLSearchParams(req, ["project", "modelName", "ref", "path"])}`, {...initReq, method: "GET"})
  }
}
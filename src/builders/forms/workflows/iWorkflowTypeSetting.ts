import faker from 'faker';
import { IBuilder } from '../iBuilder';
import { WorkflowTypeSetting } from './WorkflowTypeSetting';

export interface IWorkflowTypeSetting extends IBuilder {
  withDescription(description: string): WorkflowTypeSetting;
  withName(name: string): WorkflowTypeSetting;
  withPrevalues(prevalues: string[]): WorkflowTypeSetting;
  withValue(value: string): WorkflowTypeSetting;
  withView(view: string): WorkflowTypeSetting;
}
import { SITE_CONFIG } from '@/config';

export interface FormSubmission {
  name: string;
  email: string;
  message: string;
  subject: string;
  [key: string]: string;
}

export interface FormResponse {
  success: boolean;
  message: string;
  error?: string;
}

export interface FormAdapter {
  submit(data: FormSubmission): Promise<FormResponse>;
}

class FormspreeAdapter implements FormAdapter {
  constructor(private formId: string) {}

  async submit(data: FormSubmission): Promise<FormResponse> {
    try {
      const response = await fetch(`https://formspree.io/f/${this.formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Form submitted successfully',
        };
      }

      const errorData = await response.json();
      return {
        success: false,
        message: 'Form submission failed',
        error: errorData.error || `HTTP ${response.status}`,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Network error',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}

export function createFormAdapter(): FormAdapter {
  const formId = SITE_CONFIG.formspreeId;
  if (!formId) {
    throw new Error('Formspree ID is missing in SITE_CONFIG');
  }
  return new FormspreeAdapter(formId);
}

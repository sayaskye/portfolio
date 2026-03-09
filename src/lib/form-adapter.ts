export interface FormSubmission {
  name: string;
  email: string;
  message: string;
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
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Form submitted successfully',
        };
      }

      return {
        success: false,
        message: 'Form submission failed',
        error: `HTTP ${response.status}`,
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
  const formId = import.meta.env.PUBLIC_FORMSPREE_ID;
  if (!formId) {
    throw new Error('PUBLIC_FORMSPREE_ID environment variable is required');
  }
  return new FormspreeAdapter(formId);
}
